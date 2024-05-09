// function Teams(){
//     return(
//         <ul>
//         <li><h3>NAME OF THE TEAM</h3></li>
//         {/* <li><h3>AGR : 37</h3></li>
//         <li><h3>COUNTRY : PORTUGAL</h3></li>
//         <li><h3>GAME : FOOTBALL</h3></li> */}
//        </ul>
//     )
// }
// export default Teams;




const Iplv=()=>{
    var images='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCBbERA4a_MGwzirmvc3YtjW9MXz-8AsufQ&usqp=CAU',
    varimages='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPUjsYpJyDfUrDfMcHG_cEc0xghWivk1FQg&usqp=CAU'
   let dimensions={
        height:100,
        width:100
    }
        
    const teams=[{
        
        teamname:'Royal Challengers Benguluru',
        images:'',
        
        highestscore:973,
        players:{
            names:['virat (Batsmen)','Abd (Batsmen)','rajat (Batsmen)','maxi (Allrounder)','green (Allrounder)','jacks (batsmen)','Dk (Batsmen)','Faf (Batsmen)','Siraj (Baller)','Mahipal (Batsmen)','karn (Leg-Spinner)']
        }
        },

        {
        teamname:'Sun Riseres hyderabad',
        images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTCBbERA4a_MGwzirmvc3YtjW9MXz-8AsufQ&usqp=CAU',
        highestscore:589,
        players:{
            names:['Head (Batsmen)','klasan (Batsmen)','Makaram (Batsmen)','Shabaj(Allrounder)',' Abishek (Allrounder)','pat cuminnis (Bowler)','Nitish (Batsmen)','samad (Batsmen)','Bhuvi (Baller)','markande (Leg-Spinner)']
        }
        },

        {
            teamname:'RR',
            images:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoPUjsYpJyDfUrDfMcHG_cEc0xghWivk1FQg&usqp=CAU',
            highestscore:870,
            players:{
                names:['buttler (Batsmen)','Jaswal (Batsmen)','samson (Batsmen)','parag(Allrounder)',' Ashwin (Allrounder)','Boult (Bowler)','hetymer (Batsmen)','Hope (Batsmen)','buger (Baller)','Chahal (Leg-Spinner)']
            }
            }
       
    ]

    return (
<div>
        {
            teams.filter((val)=>{
                return  val.highestscore>=900
            }).map((each)=>{
                return(
                    <>
                    <h1>{each.teamname}</h1>
                    <img src={each.images} ></img>
                    <div>
                        {
                            each.players.names.map((player)=>{
                                return(
                                    <>
                                    <p>{player}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                    </>
                )
            })
        }

</div>


    //     // <>
    //     {/* {
    //      teams.filter((teamm)=>{
    //         return teamm.highestscore >=900
    //        )
    //      })   
    //     .map((element)=>{
    //         return(
    //             <>
    //             <h1>{element.teamname}</h1>
    //             <p>{element.players.names.map((value)=>{
    //                 return(
    //                     <>
    //                     <li>{value.map((mem)=>{
    //                         return(
    //                             <>
    //                             <p>{mem.names}</p>
    //                             </>
    //                         )
    //                     })}</li>
    //                     </>
    //                 )
    //             })}</p>
    //             </>
    //         )
    //     })
    // }
    //     </> */}
    )
}

export default Iplv;