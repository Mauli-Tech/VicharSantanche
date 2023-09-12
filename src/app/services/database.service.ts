import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vcseurzvmjijtkgwvwik.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjc2V1cnp2bWppanRrZ3d2d2lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE3NDE2OTIsImV4cCI6MjAwNzMxNzY5Mn0.rkJhykF1oDXkhItzfJVsu4pxJFQ7kxZdB4rmz38bKbs'
const supabase = createClient(supabaseUrl, supabaseKey)

function sortShlokData(data: any) {
  data.sort(function (a: any, b: any) {
      const keyA = a.shlok_no
      const keyB = b.shlok_no
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
  })
  return data
}

function sortOviData(data: any) {
  data.sort(function (a: any, b: any) {
      const keyA = a.ovi_no
      const keyB = b.ovi_no
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
  })
  return data
}


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  async getAdhyay(adhyay_no: number){
    let { data, error } = await supabase.from("Shlok").select('*').eq('adhyay_no', adhyay_no)
    if (error) {
        console.log(error)
        return { error: error }
    }
    data = sortShlokData(data)
    return data
  }

  async getOvi(adhyay_no: number){
    let { data, error } = await supabase.from("Ovi").select('*').eq('adhyay', adhyay_no)
    if (error) {
        console.log(error)
        return { error: error }
    }
    data = sortOviData(data)
    return data
  }
}
