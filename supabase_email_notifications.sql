-- ═══════════════════════════════════════════════════════════════
-- PAZARYERI — E-posta Bildirim Sistemi
-- Supabase Dashboard > SQL Editor'da çalıştırın
-- ═══════════════════════════════════════════════════════════════

-- 1) pg_net extension'ını aktifleştir (yoksa)
create extension if not exists pg_net;

-- 2) Mesaj geldiğinde alıcıya e-posta gönder
create or replace function notify_new_message()
returns trigger language plpgsql security definer as $$
declare
  alici_email  text;
  alici_name   text;
  gonderen_name text;
  ilan_baslik  text;
  msg_text     text;
begin
  -- Alıcı e-postasını auth.users'dan al
  select email, raw_user_meta_data->>'full_name'
    into alici_email, alici_name
    from auth.users
   where id = NEW.alici_id;

  -- Gönderen adını al
  select raw_user_meta_data->>'full_name'
    into gonderen_name
    from auth.users
   where id = NEW.gonderen_id;

  -- İlan başlığını al (varsa)
  if NEW.ilan_id is not null then
    select isim into ilan_baslik from urunler where id = NEW.ilan_id;
  end if;

  msg_text := coalesce(NEW.icerik, '📷 Görsel mesaj gönderildi');

  -- Supabase'in yerleşik SMTP'si ile e-posta gönder
  -- NOT: Supabase Dashboard > Auth > SMTP Settings'den SMTP ayarlayın
  perform net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || current_setting('app.resend_api_key', true),
      'Content-Type', 'application/json'
    ),
    body := jsonb_build_object(
      'from', 'Pazaryeri <bildirim@pazaryeri.com>',
      'to', alici_email,
      'subject', '💬 ' || coalesce(gonderen_name, 'Biri') || ' size mesaj gönderdi — Pazaryeri',
      'html', concat(
        '<div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 20px">',
        '<h2 style="color:#e84118;margin-bottom:4px">Yeni Mesajınız Var! 💬</h2>',
        '<p style="color:#374151;margin-bottom:20px"><strong>', coalesce(gonderen_name, 'Bir kullanıcı'), '</strong> size mesaj gönderdi.</p>',
        case when ilan_baslik is not null then
          '<p style="background:#f9fafb;border-left:3px solid #e84118;padding:10px 14px;border-radius:4px;color:#6b7280;font-size:14px">🏷️ İlan: <strong>' || ilan_baslik || '</strong></p>'
        else '' end,
        '<div style="background:#f3f4f6;border-radius:8px;padding:14px 18px;margin:16px 0;font-size:15px;color:#1a1a2e">"', msg_text, '"</div>',
        '<a href="https://pazaryeri.com/messages.html" style="display:inline-block;background:#e84118;color:white;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:700;font-size:15px">Mesajı Görüntüle →</a>',
        '<p style="color:#9ca3af;font-size:12px;margin-top:32px">Bu e-postayı almak istemiyorsanız <a href="https://pazaryeri.com/profile.html" style="color:#e84118">profil ayarlarınızdan</a> bildirimleri kapatabilirsiniz.</p>',
        '</div>'
      )
    )
  );

  return NEW;
end;
$$;

-- 3) Trigger'ı mesajlar tablosuna bağla
drop trigger if exists on_new_message on mesajlar;
create trigger on_new_message
  after insert on mesajlar
  for each row execute function notify_new_message();

-- 4) API key'i güvenli şekilde sakla (kendi Resend API key'inizle değiştirin)
-- Supabase Dashboard > Settings > Database > Configuration > Custom config ekleyin:
-- app.resend_api_key = 're_xxxxxxxxxxxxxxxxxxxx'
-- VEYA aşağıdaki komutu çalıştırın:
-- alter database postgres set "app.resend_api_key" = 're_YOUR_RESEND_KEY_HERE';

-- ═══════════════════════════════════════════════════════════════
-- KURULUM ADIMLARI:
-- 1. https://resend.com adresine kayıt olun (aylık 3000 e-posta ÜCRETSİZ)
-- 2. API key alın
-- 3. Alan adınızı doğrulayın (bildirim@pazaryeri.com için)
-- 4. Yukarıdaki alter database satırını API key'inizle çalıştırın
-- 5. Bu SQL'i Supabase SQL Editor'dan çalıştırın
-- ═══════════════════════════════════════════════════════════════
