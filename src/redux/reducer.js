const dufaultState=[{
        typeName:'Starter',
        price:49,
        viewsMonth:'20',
        ArExperiences:4
},{
  typeName:'Starter Plus',
  price:99,
  viewsMonth:'1,000',
  ArExperiences:20
},{
  typeName:'Starter',
  price:149 ,
  viewsMonth:'3,000',
  ArExperiences:60
},{
  typeName:'Pro',
  price:369 ,
  viewsMonth:'8,000',
  ArExperiences:100
}]
export default function reducer(preState=dufaultState,action){
    // const{type,data}=action
    console.log(JSON.stringify(preState))
    return preState;
}