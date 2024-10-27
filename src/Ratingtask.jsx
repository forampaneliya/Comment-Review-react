import { FaStar } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { IoReload } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";
import "./Ratingtask.css"
import { useState, useEffect } from "react";

function Ratingtask() {
    let [rating, setRate] = useState(0)
    let [data, setData] = useState({})
    let [list, setList] = useState([])
    let [close, setclose] = useState(true)


    useEffect(() => {
        let getitem = JSON.parse(localStorage.getItem("rating"));
        getitem ? setList(getitem) : setList([])
    }, setList)



    function changeInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        setData({ ...data, [name]: value });
    }
    // console.log(data);


    function submitData(e) {
        e.preventDefault()
        let newdata = { ...data, ["rating"]: rating }
        let updateData = [...list, newdata]
        setList(updateData)
        localStorage.setItem("rating", JSON.stringify(updateData))
        setData({})


    }
    console.log(list);



    return (
        <>
            <form method="post" onSubmit={(e) => submitData(e)}>
                <div className="wrap">
                    <h1>Star Rating In React</h1>
                    {
                        close ?

                            <span>
                                {
                                    [1, 2, 3, 4, 5].map((v, i) => {
                                        i = i + 1;
                                        return (
                                            <>
                                                <FaStar className="Fastar" onClick={() => setRate(i)} style={rating >= i ? { color: "yellow" } : { color: "black" }} />
                                            </>
                                        )

                                    })
                                }
                                <br></br> <br></br>
                                <IoCloseSharp className="closeicon" onClick={() => setclose(false)} />
                            </span>
                            : <a onClick={() => setclose(true)}><IoReload className="closeicon" /></a>}



                    <br></br>
                    <br></br>
                    <textarea name="feedback" id="" className="feedback" placeholder="What's Your Feedback" onChange={(e) => changeInput(e)} value={data.feedback ? data.feedback : ""}></textarea><br></br><br></br>
                    <input type="submit" name="submit" value="Submit" className="btn" />
                    <br></br>
                    <br></br>
                </div>
            </form>

            <div className="main-card-flex">
                {
                    list.map((v, i) => {
                        return (
                            <>

                                <div className="card-wrap">
                                    <div className="star">
                                        {v.rating == 1 ?
                                            <MdStarRate />

                                            :
                                            v.rating == 2 ?
                                                <span>
                                                    <MdStarRate />
                                                    <MdStarRate />
                                                </span>
                                                :
                                                v.rating == 3 ?
                                                    <span>
                                                        <MdStarRate />
                                                        <MdStarRate />
                                                        <MdStarRate />

                                                    </span>
                                                    :
                                                    v.rating == 4 ?

                                                        <span>
                                                            <MdStarRate />
                                                            <MdStarRate />
                                                            <MdStarRate />
                                                            <MdStarRate />


                                                        </span>
                                                        :
                                                        v.rating == 5 ?

                                                            <span>
                                                                <MdStarRate />
                                                                <MdStarRate />
                                                                <MdStarRate />
                                                                <MdStarRate />
                                                                <MdStarRate />



                                                            </span> : ""
                                        }
                                    </div>
                                    <div className="para">
                                        {v.feedback}

                                    </div>

                                </div>


                            </>
                        )
                    })
                }
            </div>

        </>
    )
}
export default Ratingtask;