import React,{useState} from 'react';

export const Addcontact = ({AddContact}) => {
    
    const [name, setname] = useState("");
    const [email, setemail] = useState("");


    const submit= (e) =>{
        e.preventDefault();
        if(!name || !email){
            alert("Every feild is required!");
        }
        else{
            AddContact(name,email);
            setname("");
            setemail("");
        }
    }
    return (
        <div className="container my-3">
            <h2>Add Contact</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" value={name} onChange={(e)=>{ setname(e.target.value)}} className="form-control" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} className="form-control" aria-describedby="emailHelp" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Add</button>
            </form>
        </div>
    )
}

