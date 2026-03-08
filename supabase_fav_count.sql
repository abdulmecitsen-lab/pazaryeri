-- Supabase'e fav_count kolonu ekle
ALTER TABLE urunler ADD COLUMN IF NOT EXISTS fav_count INTEGER DEFAULT 0;

-- Favori sayısını artırıp/azaltmak için RPC fonksiyon
CREATE OR REPLACE FUNCTION increment_fav_count(ilan_id UUID, delta INTEGER)
RETURNS void AS $$
  UPDATE urunler 
  SET fav_count = GREATEST(0, COALESCE(fav_count, 0) + delta)
  WHERE id = ilan_id;
$$ LANGUAGE SQL SECURITY DEFINER;

-- Grant access
GRANT EXECUTE ON FUNCTION increment_fav_count TO anon, authenticated;
