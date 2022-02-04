import Map from './Map.js'
import store from './store.js'
import React from 'react'
import {Link} from 'react-router-dom'
import arrayArc from'./Map.js'
import {useSelector} from 'react-redux'
/*let x;
let y;
let a;
let b;
let day =0;
let calendar=0;
let distance;
let place;
let name1;
let country1;
let lat = a;
let lon = b;

export let arrayEmp =[]
let d=0;
/*function inc() {
for(let i=0;i<8;i++) {
d=d+1;
arrayEmp.push(d)
console.log(arrayEmp[i])
  }
}
inc()
    let array = [];
    //let arrayArc=[];
    array.push(a)
    array.push(b)
      console.log(array)
     // console.log(arrayArc)

     function nextValue(){
     lat = Number.parseFloat(lat)+ x;
     x=0;
     if (lat<-90&&lon>-180&&lon<0) {
      lat =-180-lat;
      lon = 180+lon
      alert("Вы достигли полюса")
     }
    if (lat>90&&lon>0&&lon<180) {
    lat=180-lat;
    lon=lon-180
    alert("Вы достигли полюса")
     }
    let latToString = `|${lat.toString()},`
    array.push(latToString)
    arrayArc.push(lat)
    lon = Number.parseFloat(lon)+ y;
    y=0
    if (lon<-180) {
    lon =lon+360;
    alert("Вы пересекли нулевой меридиан")
    }
    if (lon>180) {
    lon=lon-360;
    alert("Вы пересекли нулевой меридиан")
    }
    let lonToString = `${lon.toString()}`
    array.push(lonToString)
    arrayArc.push(lon)
    
    let res= array.join('')
    console.log(x,y)
    console.log(day)
    return [res, arrayArc,calendar]
    }



async function fetchWind() {
  try {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d7a3cd7e559b16d15b8a101ab388aad6`)
  let data = await response.json()
  console.log(data)
  return data
  console.log(lat,lon)
  }
  catch(err){
  alert(err)
  }
}

function calculate(gt) {
  let lt1, lt2, ln1, ln2
  lt1=arrayArc[0]
  ln1=arrayArc[1]
  lt2=arrayArc[gt*2]
  ln2=arrayArc[gt*2+1]

  let lat1 = lt1*Math.PI/180
  let lat2 = lt2*Math.PI/180  
  let lon1 = ln1*Math.PI/180
  let lon2 = ln2*Math.PI/180;

let clt1 = Math.cos(lat1)
let clt2 = Math.cos(lat2)
let slt1 = Math.sin(lat1)
let slt2 = Math.sin(lat2)
let delta = lon2-lon1
let cdelta = Math.cos(delta)
let sdelta = Math.sin(delta);

let y = Math.sqrt(Math.pow(clt2*sdelta,2)+Math.pow((clt1*slt2*cdelta-slt1*clt2*cdelta),2))
let x = slt1*slt2+clt1*clt2*cdelta;
let ad = Math.atan2(y,x)
let dist = (ad*6372.795).toFixed(1)
console.log(dist, delta)
return dist
}

async function line6() {
  try {
  let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?locations=${arrayArc[0]},${arrayArc[1]}||${lat},${lon}&size=550,550@2x&marker-start&marker-end&key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4`)
  let blob = await response.blob()
  let img = document.createElement('img')
  document.body.append(img)
  img.src = URL.createObjectURL(blob)
  img.id='imgLine6'
  console.log(lat, lon)
  console.log(a,b)
  } catch (err){
  alert(err)
}
}

async function line7(gt) {
  try {
  let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?locations=${arrayArc[0]},${arrayArc[1]}||${arrayArc[gt*2]},${arrayArc[gt*2+1]}&size=550,550@2x&marker-start&marker-end&key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4`)
  let blob = await response.blob()
  let img = document.createElement('img')
  document.body.append(img)
  img.src = URL.createObjectURL(blob)
  img.id='imgLine7'
  console.log(lat, lon)
  console.log(g)
  console.log(arrayArc)
  console.log(arrayArc[gt*2-2],arrayArc[gt*2-1])
  } catch (err){
  alert(err)
}
}
*/
const Average = ()=>{
  const days = useSelector(state=>state.days)
  let d=0;let v=0;let j;
  
   for (let i = 0;i<days.length; i++) {
    d=d+parseFloat(days[i].distance)
  }
    for (let i = 0;i<days.length; i++) {
    v = d/parseFloat(days[i].day)
  }
    for (let i = 0;i<days.length; i++) {
    j = days[i].day
  }
    return (
      <div>
    <div> Всего расстояние {d}</div>
    <div>Всего дней:{j}</div>
    <div>Средняя скорость{v}</div>
    </div>)
}

const Jour = ({onJour=f=>f, onDist=f=>f})=> {
  const days = useSelector(state=>state.days)
  const dist1 = useSelector(state=>state.dist1)
 let _jour
     const submit = e => {
     e.preventDefault()
     onJour(_jour.value)
     onDist(_jour.value)
  }
    return (
          <div>
            <form onSubmit = {submit}>
      <input ref = {input =>_jour=input}
            type = "number" min = "1" placeholder = "Day" required/>
            <button>Выбрать день</button></form>
                      <div id= "direct"> {dist1}</div>
        </div>)
  }
  
const Day = ({day, country, name, distance, index})=> 
   (
     <div >
     <div className ='day'>{day}</div>
     <div className = 'place'>{country}, {name}</div>
     <div className = 'distance'>{distance}</div>
     </div>
   )

   const Diary = ()=> {
    const days = useSelector(state=>state.days)
    return(<div>
           <div className = "day1">День</div><div className = "point">Пункт прибытия</div><div className="distance1">Расстояние</div>
      {days.map((day,index)=>
      <Day key = {index}{...day}/>
      )}
     </div>
     )
      }

  export const Diary1 =()=>{

    async function line7(gt) {
      try {
      let response = await fetch(`https://www.mapquestapi.com/staticmap/v5/map?locations=${arrayArc[0]},${arrayArc[1]}||${arrayArc[gt*2]},${arrayArc[gt*2+1]}&size=550,550@2x&"marker-7B0099"&marker-end&key=dDGK8sCXjbWcbowd7oVsGzyptmQpGLi4`)
      let blob = await response.blob()
      let img = document.createElement('img')
      document.body.append(img)
      img.src = URL.createObjectURL(blob)
      img.id='imgLine7'
      console.log(arrayArc)
      console.log(arrayArc[gt*2-2],arrayArc[gt*2-1])
      } catch (err){
      alert(err)
  }
}
function  showJour(gt) {
      const jour = line7(gt)
      store.dispatch({type:"SHOW_JOUR"})
      }
 function calculate(gt) {
    let lt1, lt2, ln1, ln2
    lt1=arrayArc[0]
    ln1=arrayArc[1]
    lt2=arrayArc[gt*2]
    ln2=arrayArc[gt*2+1]

    let lat1 = lt1*Math.PI/180
    let lat2 = lt2*Math.PI/180  
    let lon1 = ln1*Math.PI/180
    let lon2 = ln2*Math.PI/180;

  let clt1 = Math.cos(lat1)
  let clt2 = Math.cos(lat2)
  let slt1 = Math.sin(lat1)
  let slt2 = Math.sin(lat2)
  let delta = lon2-lon1
  let cdelta = Math.cos(delta)
  let sdelta = Math.sin(delta);

  let y = Math.sqrt(Math.pow(clt2*sdelta,2)+Math.pow((clt1*slt2*cdelta-slt1*clt2*cdelta),2))
  let x = slt1*slt2+clt1*clt2*cdelta;
  let ad = Math.atan2(y,x)
  let dist = (ad*6372.795).toFixed(1)
  console.log(dist, delta)
  return dist
  }
   
     function showDist(gt) {
       const dist1 = calculate(gt)
       console.log(dist1)
       store.dispatch({type:"SHOW_DIST",
       payload: {
         dist1:dist1
       }
       })
     }
 
 
    return (
     
    <div className="statistics">
       <nav>
      <Link to="/map">Map</Link>
      <Link to="/">Home</Link>
      </nav>
          <Diary />
   <div id ='average'><Average /></div>
  
   <div className = 'jour'><Jour onJour = {showJour} onDist ={showDist}/></div> 
   </div>
   )
  }


//export default Diary1  <button className= "route" onClick ={showRoute}>Арка</button> 
