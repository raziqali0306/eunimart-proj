import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {

    const {userId} = useParams();
    const [data, setData] = useState(null);
    const [support, setSupport] = useState(null);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${userId}`)
        .then((res) => {  
            setData(res.data.data);
            setSupport(res.data.support);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1 className="text-4xl uppercase font-semibold tracking-widest pt-10 pb-8 ">User detail</h1>
            <div className="bg-secondary mx-16 md:mx-32 lg:mx-56 xl:mx-96 py-16 rounded-sm">
                {data !== null ? 
                    <div className="grid grid-cols-1 mx-8">
                        <div className="rounded-full">
                            <img src={data.avatar} alt="" className="rounded-full mx-auto w-52 h-52" />
                        </div>
                        <div className="mt-10 mb-8">
                            <p className="text-2xl uppercase font-bold tracking-wider mb-2">{data.first_name + '  ' + data.last_name}</p>
                            <p className="text-md mb-2">EMAIL: {data.email}</p>
                        </div>
                    </div>
                :
                <p>user data not found</p>
                }
                {support !== null ? 
                    <div className="">
                        <p className="text-sm mb-6">{support.text}</p>
                        <a href={support.url} className="px-4 py-2 rounded-md bg-primary">Contribute</a>
                    </div>
                :
                null
                }
            </div>
        </div>
        
    );
}

export default UserDetail;