import { useEffect, useState } from 'react'

const useFetch = (url, token) => {
	// initial state
	const [data, setData] = useState(null)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// brings the data and sets it to the data const useState
		const fetchData = async () => {
			setLoading(true)

			try {
				const res = await fetch(url, {
					headers: {
						Authorization: 'Bearer ' + token,
					},
				})
				const json = await res.json()

				setData(json)
				setLoading(false)
			} catch (error) {
				setError(error)
				setLoading(false)
			}
		}

		fetchData()
		// console.log(data)
		// condition, if url changes it will bring the data again
	}, [url])

	return { data, error, loading }
}

export default useFetch
