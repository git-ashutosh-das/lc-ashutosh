/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let map = new Map();
    for( let [course, pre] of prerequisites ){
        if( !map.has(course)) map.set(course, []);
        map.get(course).push(pre)
    }

    let visited = new Set();
    let order = new Set()
    function dfs(course){
        if ( order.has(course)) return true;
        if ( map.has(course) && map.get(course).length == 0){
            order.add(course)
            return true; // if no requisites for course it can be completed - base case
        }
        if( !map.has(course) ) {
            order.add(course)
            return true;
        } // no requisetes for course - s.a.above
        if( visited.has(course) ) return false; // cycle detecte in the path

        visited.add(course);
        for( let elem of map.get(course)){
            let canbecompleted = dfs(elem) // if any dfs return false - means - cannot be completed
            if( canbecompleted == false) return false;
        }
        order.add(course)
        map.set( course, [] ) // if line 24 for loop is finished means this course can be completed, memoise by setting [] to reduce duplicate visit
        // [] means we have explored from here and it can be completed so if this comes in new path we do not need explore and simply can infer from [] that it can be completed
        visited.delete(course); // remove from visit list for next path
    }
    console.log(map)
    for ( let i = 0; i< numCourses; i++){
        let explorefromith = dfs(i);
        if( explorefromith == false) return [];
    }
    return [...order]
};