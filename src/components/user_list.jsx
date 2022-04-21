import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {

    const [userList, setUserList] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    const updatePageNumber = (operation) => {
        if (operation === 1) {
          if (page < totalPages) {
            setPage(page + 1);
          }
        } else {
          if (page > 0) {
            setPage(page - 1);
          }
        }
      };

    const updateUserList = () => {
        const users = axios.get(`https://reqres.in/api/users?page=${page}`).then((res) => {
            console.log(res.data.data);
            setUserList(res.data.data);
            setTotalPages(res.data.total_pages)
            console.log(res.data.total_pages)
        }).catch((err) => console.log(err));
    }

    useEffect(() => {
        updateUserList();
    }, [page])

    useEffect(() => {
        updateUserList();
    }, [])

    return (
        <div>
            <h1 className="text-4xl uppercase font-semibold tracking-widest pt-10 pb-8">Users</h1>
            
            <div className="mb-12">
                {userList.length === 0 ?
                    <p>no users found</p>
                : 
                <div  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-10 mx-16 md:mx-16 lg:mx-32 xxl:mx-36 ">
                    {userList.map((user) => {
                        return (
                            <div className="col-span-1 rounded-md align-middle px-4 py-12 bg-secondary hover:scale-110 transition ease-in-out duration-500">
                                <div className="rounded-full mb-2 inline-flex items-center">
                                    <img src={user.avatar} alt="" className="rounded-full h-32 w-32 mb-2" />
                                </div>
                                <p className="text-2xl mb-2">{user.first_name + ' ' + user.last_name}</p>
                                <p className="mb-4">{user.email}</p>
                                <Link to={`/users/${user.id}`} className="mt-12 px-4 py-2 border-primary border-2 bg-primary rounded-md uppercase">View</Link>
                            </div>
                        );
                    })}
                </div>
                }
            </div>

            <div className="py-4 px-2 border-t-2 select-none shadow-md mx-4 md:mx-8 lg:mx-16">
              <div className="h-8 w-full inline-flex items-center justify-between">
                <div
                  className="text-sm py-2 px-4 border-2 rounded-lg text-primaryText cursor-pointer"
                  onClick={() => updatePageNumber(0)}
                >
                  {" "}
                  Previous
                </div>

                <div className="text-sm">
                  Page {page} of {totalPages}
                </div>

                <div
                  className="text-sm py-2 px-4 border-2 rounded-lg text-primaryText cursor-pointer"
                  onClick={() => updatePageNumber(1)}
                >
                  {" "}
                  Next
                </div>
              </div>
            </div>
        </div>
    );
}

export default UserList;