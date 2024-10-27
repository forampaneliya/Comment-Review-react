import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Multiple.css"
import { AiOutlineStop } from "react-icons/ai";
import { AiOutlineUndo } from "react-icons/ai";




function Multiplerating() {
    let [rating, setRaing] = useState()
    let [rating2, setRating2] = useState(0)
    let [rating3, setRating3] = useState(0)
    let [rating4, setRating4] = useState(0)
    let [rating5, setRating5] = useState(0)
    let [rating6, setRating6] = useState(0)
    let [rating7, setRating7] = useState(0)
    let [rating8, setRating8] = useState(0)
    let [rating9, setRating9] = useState(0)
    // let [rating10, setRating10] = useState(0)


    let [close, setClose] = useState(true)
    let [data, setdata] = useState({})
    let [list, setList] = useState([])

    function changeInput(e) {
        let { name, value } = e.target;

        setdata({ ...data, [name]: value })
    }
    console.log(data);

    function submitData(e) {
        e.preventDefault()
        let rateData = ({
            ...data,
            ["star1"]: rating,
            ["star2"]: rating2,
            ["star3"]: rating3,
            ["star4"]: rating4,
            ["star5"]: rating5,
            ["star6"]: rating6,
            ["star7"]: rating7,
            ["star8"]: rating8,
            ["star9"]: rating9,
            // ["star10"]:rating10,
            // ["html"]:rating
        }
        )
        // let rateData = { ...data, ["rating"]: rating }
        let newdata = [...list, rateData]
        setList(newdata)
        localStorage.setItem("data", JSON.stringify(newdata))

    }
    console.log(list);


    return (
        <>
            {/* <h1>rating</h1> */}
            <div className="container">
                <div className="multiple-wrap">
                    <form action="" method="post" onSubmit={(e) => submitData(e)}>

                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRaing(i)} style={rating >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>



                        {/* =========2 */}
                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRating2(i)} style={rating2 >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback2" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>
                        {/* =========3 */}
                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRating3(i)} style={rating3 >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback3" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>
                        {/* ============4 */}
                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRating4(i)} style={rating4 >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback4" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>
                        {/* ==============5 */}
                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRating5(i)} style={rating5 >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback5" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>
                        {/* ============6 */}
                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRating6(i)} style={rating6 >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback6" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>
                        {/* ==========8 */}
                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRating7(i)} style={rating7 >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback7" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>
                        {/* ============9 */}
                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRating8(i)} style={rating8 >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback8" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>
                        {/* ================10 */}
                        <div className="rating-wrap">
                            <br></br>
                            <hr />
                            <p className="paragraph">Teaching / Explanation skills [Psychometric Judging]</p>


                            {close ?
                                <span>
                                    <AiOutlineStop className="stop" onClick={() => setClose(false)} />


                                    <span className="line">|</span>

                                    {
                                        [1, 2, 3, 4, 5].map((v, i) => {
                                            i = i + 1;
                                            return (
                                                <>
                                                    <FaStar className="star-rate" onClick={() => setRating9(i)} style={rating9 >= i ? { color: "yellow" } : { color: "rgb(196, 191, 191)" }} />
                                                </>
                                            )
                                        })
                                    }
                                </span>
                                : <a onClick={() => setClose(true)}><AiOutlineUndo className="stop" /></a>}

                            <br></br><br></br>
                            <textarea name="feedback9" id="" className="commnet" placeholder="Add comment" onChange={(e) => changeInput(e)}></textarea>
                        </div>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <br></br>

                        <button type="" className="btnn1">Decline</button>
                        <button type="" className="btnn2">Save as draft</button>
                        <button type="submit" className="btnn">Submit</button>



                    </form>

                </div>
            </div>


            <br></br><br></br>
            <table align="center" border={1}>
                <th>subject</th>
                <th>rating</th>
                <th>Feedback</th>
                <tr>
                    <td>Teaching / Explanation skills [Psychometric Judging]

                    </td>
                    <td>
                        {data.rating == 1 &&
                            <FaStar />
                        }
                        {data.rating == 2 &&
                            <>

                                <FaStar />
                                <FaStar />
                            </>


                        } {data.rating == 3 &&
                            <>

                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>


                        } {data.rating == 4 &&
                            <>

                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>

                        } {data.rating == 5 &&
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>

                        }
                    </td>
                    <td>{data.feedback}</td>
                </tr>

                {/* 2 */}
                <tr>
                    <td>Teaching / Explanation skills [Psychometric Judging]

                    </td>
                    <td>
                        {data.rating == 1 &&
                            <FaStar />
                        }
                        {data.rating == 2 &&
                            <>

                                <FaStar />
                                <FaStar />
                            </>


                        } {data.rating == 3 &&
                            <>

                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>


                        } {data.rating == 4 &&
                            <>

                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>

                        } {data.rating == 5 &&
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>

                        }
                    </td>
                    <td>{data.feedback}</td>
                </tr>
            </table>

        </>
    )
}
export default Multiplerating;