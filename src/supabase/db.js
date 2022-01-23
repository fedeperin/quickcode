import { supabase } from './config'

export const insertToDb = async (db, insertion) => {
    const { data, error } = await supabase
      .from(db)
      .insert([insertion])
   
    return data
}

export const searchData = async (db, name, eq) => {
  let { data, error } = await supabase
    .from(db)
    .select('*')
    .eq(name, eq)
  return data
}
