const dataLink = "data/members.json";

async function getMembers(){

    const response = await fetch(dataLink);
    const result = await response.json();

    if (response.ok) {
        console.log(result);
        //displayMembers(result);
    }

}

async function displayMembers(members)
{
    
    console.log(members[0].name);
}
    
