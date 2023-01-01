import React from 'react'
import useFetch from '../hooks/usefetch'
import { Link } from 'react-router-dom'

const Homepage = () => {
	const token =
		'42052e1b31bf0a6443b6b1c31c295166600fe38436e2c5478b71bb32fbd6845087d1b48e18b2aa2307e6d2d69e0ec094612936d2b145c0db1a532e89278bd26d25268a391a770a3af190fd6bc6add762432d7770e16b45c66fb9be503b8a4f41463251e8ae4434c3768c72a647631ac89884627052cf6ec081d9f795463ab456'

	const { data, error, loading } = useFetch(
		'http://localhost:1337/api/posts',
		token
	)
	if (loading) return <p>loading ...</p>
	if (error) return <p>error :(</p>

	console.log(data)

	return (
		<>
			<h1>Posts are here ...</h1>
			<div className="container">
				{data.data.map((post) => (
					<div key={post.id} className="card">
						<div className="card__image">
							<Link to={`/post/${post.id}`}>
								<img
									src={post.attributes.image_url}
									alt={post.attributes.title}
								/>
							</Link>
						</div>
						<div className="card__content">
							<Link to={`/post/${post.id}`} className="card__title">
								<h2>{post.attributes.title.substring(0, 20)}</h2>
							</Link>
							<small>Console list</small>
							<p>{post.attributes.body.substring(0, 170)} ...</p>
							<Link to={`/post/${post.id}`}>Read more</Link>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Homepage
