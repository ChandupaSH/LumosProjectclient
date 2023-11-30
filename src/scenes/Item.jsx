import React from 'react'

const Item = () => {
    const getMensTshirts = async ()=> {
        try {
            const response = await fetch("http://localhost:3003/items/tshirtmens",{
                method: "GET",
                headers: {}
            })
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(`error is: ${error}`);
        }
    }
    const getLadiesTshirts = async ()=> {
        try {
            const response = await fetch("http://localhost:3003/items/tshirtladies",{
                method: "GET",
                headers: {}
            })
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(`error is: ${error}`);
        }
    }
    const getMFTshirts = async ()=> {
        try {
            const response = await fetch("http://localhost:3003/items/tshirtmf",{
                method: "GET",
                headers: {}
            })
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(`error is: ${error}`);
        }
    }
    const getMensTrouser = async ()=> {
        try {
            const response = await fetch("http://localhost:3003/items/trousermens",{
                method: "GET",
                headers: {}
            })
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(`error is: ${error}`);
        }
    }
    const getLadiesTrouser = async ()=> {
        try {
            const response = await fetch("http://localhost:3003/items/trouserladies",{
                method: "GET",
                headers: {}
            })
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(`error is: ${error}`);
        }
    }
    
  return (
    <div>
        items
        <button onClick={() => getMensTshirts()}>get mens tshirts</button>
    </div>
  )
}

export default Item