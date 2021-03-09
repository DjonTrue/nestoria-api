import React, {useState} from "react"

const Bookmarks = () => {
    const [bookmarksList, setbookmarksList] = useState([]);

    return (
        <div className="bookmarks-body">
            <h3>Bookmarks:</h3>

            {bookmarksList.length > 0
                ? bookmarksList.map((item, index) => {

                })
                : <p className="text-danger">Nothing added, please click 'add to bookmarks on your favorites characters'</p>
            }

        </div>
    )
}

export default Bookmarks