
export const startAddRank=(Data)=>{
    return {
        type:'ADDRANK',payload:Data
    }
 }
export const startRemoveDishOfUser=(RankObj)=>{
    return {
        type:'REMOVERANK',payload:RankObj
    }
}