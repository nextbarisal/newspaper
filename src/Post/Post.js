import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const Post = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // data.key = pass
        fetch('http://newsapi.munimrahman.xyz/news', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("News Posted Successfully!", "", "success");
                }
            })
        reset()
        console.log(data);
    };
    return (
        <div className="bg-eee">
            <div className="container mx-auto pt-4">
                <h1 className="py-3 text-center">Post News</h1>
                <div className="w-75 mx-auto pb-5">
                    <div className="d-flex justify-content-center">
                        <form className="mt-4 row" onSubmit={handleSubmit(onSubmit)}>
                            <div className="col-12">
                                <div className="mb-2">
                                    <label className="mb-2">News Title*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("title", { required: true })}
                                        placeholder="News Title"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Image URL*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("img", {
                                            required: true
                                        })}
                                        placeholder="Img Link"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">Category*</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("category", {
                                            required: true
                                        })}
                                        placeholder="International"
                                    />
                                    <small>Politics, International, Sports</small>
                                </div>
                                <div className="mb-3">
                                    <label className="mb-2">News</label> <br />
                                    <input
                                        className="form-control shadow-none"
                                        type="text"
                                        {...register("news", {
                                            required: true
                                        })}
                                        placeholder="News"
                                    />
                                </div>
                            </div>
                            <div className="text-center">
                                <input className="btn btn-primary py-3 px-4 shadow-none rounded-pill fw-bold px-3" type="submit" value="Post News" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;