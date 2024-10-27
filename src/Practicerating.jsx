import { useEffect } from 'react';
import { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { RiCloseLargeLine } from "react-icons/ri";



function Practicerating() {
  let [rating, setRate] = useState(0)
  let [hover, setHover] = useState(0)
  let [data, setData] = useState({})
  let [list, setList] = useState([])
  let [close, setclose] = useState(true)


  useEffect(() => {
    let getitem = JSON.parse(localStorage.getItem("rating"));
    getitem ? setList(getitem) : setList([])
  }, setList)

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value })


  }
  function submitdata(e) {
    e.preventDefault()
    let newdata = { ...data, ["rating"]: hover }
    let updateData = [...list, newdata]
    setList(updateData)
    localStorage.setItem("rating", JSON.stringify(updateData))

  }
  console.log(list);


  return (
    <>
      <h1>Rating</h1>

      {close == true ?
        <span>
          {
            [...Array(5)].map((v, i) => {
              i = i + 1;
              return (<>
                <FaStar name="rating" onClick={() => setRate(i)} style={(rating || hover) >= i ? { color: "yellow" } : { color: "black" }} onMouseOver={() => setHover(i)} />

              </>)
            })}
          <button>reset</button>
          <RiCloseLargeLine onClick={() => setclose(false)} />

        </span>


        : <a onClick={() => setclose(true)}>Undo</a>}


      <br></br><br></br>
      <textarea name="feedbak" id="" onChange={(e) => handleChange(e)} style={{ width: "300px", height: "100px", fontSize: "18px", borderRadius: "10px", border: "2px solid gray" }} placeholder='Write your feedback here...'></textarea>
      <br></br><br></br>
      <input type="submit" name="submit" value="submit" onClick={(e) => submitdata(e)} />

      {list.map((v, i) => {
        return (
          <>
            {v.rating == 1 ?
              <FaStar style={{ color: "yellow" }} />

              :
              v.rating == 2 ?
                <span>
                  <FaStar style={{ color: "yellow" }} />
                  <FaStar style={{ color: "yellow" }} />
                </span>
                :
                v.rating == 3 ?
                  <span>
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />
                    <FaStar style={{ color: "yellow" }} />

                  </span>
                  :
                  v.rating == 4 ?

                    <span>
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />
                      <FaStar style={{ color: "yellow" }} />


                    </span>
                    :
                    v.rating == 5 ?

                      <span>
                        <FaStar style={{ color: "yellow" }} />
                        <FaStar style={{ color: "yellow" }} />
                        <FaStar style={{ color: "yellow" }} />
                        <FaStar style={{ color: "yellow" }} />


                      </span> : ""
            }
            <h1>{v.feedbak}</h1>

          </>
        )

      })
      }

    </>
  )
}



export default Practicerating
