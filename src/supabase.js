import { createClient } from '@supabase/supabase-js'

// El anon key es público por diseño (siempre viaja al frontend). Se usa la
// variable de build VITE_* si existe; si no (deploy sin secrets), se usa el
// fallback para que likes/views siempre funcionen.
const FALLBACK_URL = 'https://mzpcoyukmwrahizrpnvh.supabase.co'
const FALLBACK_KEY = 'sb_publishable_wGAKEQABT34FbnFCOwFHng_76oqTSrv'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || FALLBACK_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || FALLBACK_KEY

export const supabaseAvailable = !!(supabaseUrl && supabaseAnonKey)

export const supabase = supabaseAvailable
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null
