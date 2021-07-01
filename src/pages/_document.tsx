import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	// 38:05
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main></Main>
					<NextScript></NextScript>
				</body>
			</Html>
		)
	}
}