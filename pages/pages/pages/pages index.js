import { useState } from 'react'
import Head from 'next/head'

const CUISINES = ["All","Italian","Mexican","Chinese","Japanese","Indian","French","Mediterranean","Thai","American","Vietnamese","Korean","Middle Eastern"]

export default function Home(){
  const [location,setLocation] = useState('')
  const [cuisine,setCuisine] = useState('All')
  const [results,setResults] = useState([])
  const [loading,setLoading] = useState(false)

  const sampleData = [
    { name: "Local Bistro", cuisine: "French" },
    { name: "Mama’s Pasta House", cuisine: "Italian" },
    { name: "Dragon Flame", cuisine: "Chinese" },
    { name: "Taco Fiesta", cuisine: "Mexican" },
    { name: "Sushi Zen", cuisine: "Japanese" },
    { name: "Bombay Spice", cuisine: "Indian" }
  ]

  function find(){
    if(!location.trim()){
      alert('Enter city or location to search.')
      return
    }
    setLoading(true)
    setTimeout(() => {
      const filtered = cuisine === 'All' ? sampleData : sampleData.filter(r=>r.cuisine===cuisine)
      setResults(filtered)
      setLoading(false)
    }, 700)
  }

  return (
    <>
      <Head>
        <title>TasteBuds — Find Foodie Friends</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="brand">
            <div className="logo">TB</div>
            <div>
              <div style={{fontWeight:700,fontSize:20}}>TasteBuds</div>
              <div style={{fontSize:12,color:'#6b7280'}}>Meet. Eat. Connect.</div>
            </div>
          </div>
          <div>
            <button className="button">Sign in</button>
          </div>
        </div>

        <div className="grid">
          <div>
            <div className="card profile-area">
              <div className="avatar">No Photo</div>
              <div style={{width:'100%'}}>
                <label style={{fontWeight:700}}>Your Location</label>
                <input className="input" placeholder="City, Country" value={location} onChange={(e)=>setLocation(e.target.value)} />
                <label style={{marginTop:10,fontWeight:700}}>Payment Preference</label>
                <select className="input" defaultValue="split">
                  <option value="split">Split the bill</option>
                  <option value="you">I'm paying</option>
                  <option value="them">They're paying</option>
                </select>
                <label style={{marginTop:10,fontWeight:700}}>Preferred Cuisine</label>
                <select className="input" value={cuisine} onChange={(e)=>setCuisine(e.target.value)}>
                  {CUISINES.map(c=> <option key={c} value={c}>{c}</option>)}
                </select>
                <div style={{marginTop:12}}>
                  <button className="button" onClick={find}>Find Restaurants</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <h3 style={{marginTop:0}}>Restaurants Nearby</h3>
              {loading && <p>Searching…</p>}
              {!loading && results.length===0 && (<p style={{color:'#6b7280'}}>No restaurants yet — try a search.</p>)}
              {!loading && results.map((r,i)=>(
                <div key={i} className="restaurant">
                  <div style={{fontWeight:700}}>{r.name}</div>
                  <div style={{fontSize:13,color:'#6b7280'}}>Cuisine: {r.cuisine}</div>
                </div>
              ))}
            </div>

            <div style={{height:12}} />

            <div className="card">
              <h4 style={{marginTop:0}}>About TasteBuds</h4>
              <p style={{color:'#6b7280'}}>TasteBuds helps food lovers meet, share meals, and discover new restaurants — built with safety-first verification planned.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
