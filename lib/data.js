import fs from "fs";
import path from "path";

const dataDir = path.join( process.cwd(), "data" );

export function getSortedList(){
  const filePath1 = path.join(dataDir, "people.json");


  const jsonString = fs.readFileSync(filePath1, "utf8");
  

  const jsonObj = JSON.parse(jsonString);
  

jsonObj.sort(
    function(a,b) {
      return a.name.localeCompare(b.name);
    }
  );
  
  
   const sortedList1 = jsonObj.map(function(item) {
    return {
      id: item.id.toString(),
      name: item.name
    };
  });


  return sortedList1.concat();
}
  

 export function getAllIds() {
    const filePath1 = path.join(dataDir, "people.json");

  const jsonString = fs.readFileSync(filePath1, "utf8");

  

  const jsonObj = JSON.parse(jsonString);

   const idList1 = jsonObj.map(function(item) {
    return {
      params: {
        id: item.id.toString()
      }
    };
  });


  return idList1.concat();
}

export async function getData(idRequested) {
  const filePath1 = path.join(dataDir, "people.json");


  const jsonString = fs.readFileSync(filePath1, "utf8");


  const jsonObj = JSON.parse(jsonString);

 
  const objMatch = jsonObj.filter(
    function(obj) {
      return obj.id.toString() === idRequested;
    }
  );

 let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];

    const filePath2 = path.join(dataDir, 'people2.json');
    
    const jsonString2 = fs.readFileSync(filePath2,'utf8');
    
    const jsonObj2 = JSON.parse(jsonString2);
    
    const objMatch2 = jsonObj2.filter(
      function(obj) {
        return obj.owner.toString() === idRequested;
      }
    );
    objReturned.people2 = objMatch2;
    
  } else {
    objReturned = {};
  }


  return objReturned;

  
}