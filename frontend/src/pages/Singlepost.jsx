import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/usefetch'

const Singlepost = () => {
	const { id } = useParams()
	const token =
		'42052e1b31bf0a6443b6b1c31c295166600fe38436e2c5478b71bb32fbd6845087d1b48e18b2aa2307e6d2d69e0ec094612936d2b145c0db1a532e89278bd26d25268a391a770a3af190fd6bc6add762432d7770e16b45c66fb9be503b8a4f41463251e8ae4434c3768c72a647631ac89884627052cf6ec081d9f795463ab456'

	const { data, error, loading } = useFetch(
		'http://localhost:1337/api/posts/' + id,
		token
	)
	console.log(data)

	if (loading) return <p>loading ...</p>
	if (error) return <p>error :(</p>

	return (
		<div className="review-card">
			<img
				src={data.data.attributes.image_url}
				alt={data.data.attributes.title}
			/>
			<h2>{data.data.attributes.title}</h2>

			<div>
				<p>{data.data.attributes.body}</p>
			</div>
			<Link to="/">Back</Link>
		</div>
	)
}

export default Singlepost
