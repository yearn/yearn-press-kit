import	React, {ReactElement}	from	'react';
import	ContentCard				from	'components/ContentCard';

function	Colors(): ReactElement {
	return (
		<section aria-label={'Color'}>
			<h2 className={'mb-10 text-3xl font-bold text-neutral-900'}>
				{'Color'}
			</h2>
			<ContentCard
				title={'Primary Palette'}
				description={'Our primary color palette consists of Blue, White and Black.\nThese colours contrast to create high visibility.'}>
				<div className={'grid grid-cols-1 gap-x-5 pb-10 md:grid-cols-3 md:gap-y-14'}>
					<div className={'bg-yearn-blue mt-6 h-[315px] px-5 py-4 text-white md:my-6'}>
						<p>{'Yearn Blue'}</p>
						<p>{'#0675F9'}</p>
						<p>{'6.87.249'}</p>
						<p>{'100.75.0.0'}</p>
					</div>
					<div className={'mt-6 h-[315px] border border-neutral-400 bg-white px-5 py-4 text-black md:my-6'}>
						<p>{'White'}</p>
						<p>{'#FFFFFF'}</p>
						<p>{'255.255.255'}</p>
						<p>{'0.0.0.0'}</p>
					</div>
					<div className={'mt-6 h-[315px] bg-black px-5 py-4 text-white md:my-6'}>
						<p>{'Black'}</p>
						<p>{'#000000'}</p>
						<p>{'0.0.0'}</p>
						<p>{'0.0.0.0'}</p>
						<p>{'Pantone Process Black C'}</p>
					</div>
				</div>
			</ContentCard>
			<ContentCard
				title={'Tints'}
				description={'Tints of color extend the color palette, for example,\nfor use in UI, charts and diagrams.'}>
				<div className={'grid grid-cols-1 pt-5 pb-14 md:grid-cols-4'}>
					<div className={'bg-good-ol-grey-100 h-[160px] px-5 py-4 text-black'}>
						<p>{"Good ol' Grey 100"}</p>
						<p>{'#F4F4F4'}</p>
						<p>{'244.244.244'}</p>
						<p>{'5.4.4.0'}</p>
					</div>
					<div className={'bg-good-ol-grey-200 h-[160px] px-5 py-4 text-black'}>
						<p>{"Good ol' Grey 200"}</p>
						<p>{'#EBEBEB'}</p>
						<p>{'235.235.235'}</p>
						<p>{'9.6.7.0'}</p>
					</div>
					<div className={'bg-good-ol-grey-300 h-[160px] px-5 py-4 text-black'}>
						<p>{"Good ol' Grey 300"}</p>
						<p>{'#E1E1E1'}</p>
						<p>{'225.225.225'}</p>
						<p>{'14.10.11.0'}</p>
					</div>
					<div className={'bg-good-ol-grey-400 h-[160px] px-5 py-4 text-black'}>
						<p>{"Good ol' Grey 400"}</p>
						<p>{'#9D9D9D'}</p>
						<p>{'157.157.157'}</p>
						<p>{'39.31.31.9'}</p>
					</div>


					<div className={'bg-good-ol-grey-500 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 500"}</p>
						<p>{'#7E7E7E'}</p>
						<p>{'126.126.126'}</p>
						<p>{'50.39.39.21'}</p>
					</div>
					<div className={'bg-good-ol-grey-600 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 600"}</p>
						<p>{'#5B5B5B'}</p>
						<p>{'91.91.91'}</p>
						<p>{'59.49.47.39'}</p>
					</div>
					<div className={'bg-good-ol-grey-700 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 700"}</p>
						<p>{'#424242'}</p>
						<p>{'66.66.66'}</p>
						<p>{'66.56.53.57'}</p>
					</div>
					<div className={'bg-good-ol-grey-800 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 800"}</p>
						<p>{'#282828'}</p>
						<p>{'40.40.40'}</p>
						<p>{'74.64.59.77'}</p>
					</div>


					<div className={'bg-good-ol-grey-900 h-[160px] px-5 py-4 text-white'}>
						<p>{"Good ol' Grey 900"}</p>
						<p>{'#0C0C0C'}</p>
						<p>{'12.12.12'}</p>
						<p>{'88.76.62.95'}</p>
					</div>

				</div>
			</ContentCard>
			<ContentCard
				title={'Secondary Palette'}
				description={'Our secondary color palette is used to extend flexibility and depth across our touchpoints. These colours can be used as panels to support an image or headline or contain body copy. In some instances, color can be used within a headline for internal and external communications.'}>
				<div className={'grid grid-cols-1 pt-5 pb-20 md:grid-cols-4'}>
					<div className={'bg-metaverse-sunset-50 order-[1] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 50'}</p>
						<p>{'#FFEEA9'}</p>
						<p>{'255.238.169'}</p>
						<p>{'0.6.43.0'}</p>
						<p>{'Pantone 0131c'}</p>
					</div>
					<div className={'bg-disco-salmon-50 order-[11] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Disco Salmon 50'}</p>
						<p>{'#FFECEF'}</p>
						<p>{'255.236.239'}</p>
						<p>{'0.12.3.0'}</p>
						<p>{'Pantone 705c'}</p>
					</div>
					<div className={'bg-tokyo-party-50 order-[21] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Tokyo Party 50'}</p>
						<p>{'#D1A2DD'}</p>
						<p>{'209.162.221'}</p>
						<p>{'17.44.0.0'}</p>
						<p>{'Pantone 2562c'}</p>
					</div>
					<div className={'bg-up-only-green-50 order-[31] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 50'}</p>
						<p>{'#DDF3AC'}</p>
						<p>{'221.243.172'}</p>
						<p>{'22.0.44.0'}</p>
						<p>{'Pantone 372c'}</p>
					</div>


					<div className={'bg-metaverse-sunset-100 order-[2] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 100'}</p>
						<p>{'#FFDC53'}</p>
						<p>{'255.220.83'}</p>
						<p>{'0.14.77.0'}</p>
						<p>{'Pantone 113c'}</p>
					</div>
					<div className={'bg-disco-salmon-100 order-[12] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Disco Salmon 100'}</p>
						<p>{'#FF90A1'}</p>
						<p>{'255.144.161'}</p>
						<p>{'0.57.20.0'}</p>
						<p>{'Pantone 1775c'}</p>
					</div>
					<div className={'bg-tokyo-party-100 order-[22] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Tokyo Party 100'}</p>
						<p>{'#A446BA'}</p>
						<p>{'164.70.186'}</p>
						<p>{'56.78.0.0'}</p>
						<p>{'Pantone 2582c'}</p>
					</div>
					<div className={'bg-up-only-green-100 order-[32] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 100'}</p>
						<p>{'#BAE659'}</p>
						<p>{'186.230.89'}</p>
						<p>{'36.0.76.0'}</p>
						<p>{'Pantone 374c'}</p>
					</div>


					<div className={'bg-metaverse-sunset-200 order-[3] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 200'}</p>
						<p>{'#F1F025'}</p>
						<p>{'241.240.37'}</p>
						<p>{'14.0.96.0'}</p>
						<p>{'Pantone 395c'}</p>
					</div>
					<div className={'bg-disco-salmon-200 order-[13] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 200'}</p>
						<p>{'#FD5DA5'}</p>
						<p>{'253.93.165'}</p>
						<p>{'0.75.0.0'}</p>
						<p>{'Pantone 212c'}</p>
					</div>
					<div className={'bg-tokyo-party-200 order-[23] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 200'}</p>
						<p>{'#7829E1'}</p>
						<p>{'253.93.165'}</p>
						<p>{'0.75.0.0'}</p>
						<p>{'Pantone 266c'}</p>
					</div>
					<div className={'bg-up-only-green-200 order-[33] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 200'}</p>
						<p>{'#55F541'}</p>
						<p>{'85.245.65'}</p>
						<p>{'83.0.100.0'}</p>
						<p>{'Pantone 7488c'}</p>
					</div>


					<div className={'bg-metaverse-sunset-300 order-[4] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 300'}</p>
						<p>{'#E6FC06'}</p>
						<p>{'230.252.6'}</p>
						<p>{'Pantone 803c'}</p>
					</div>
					<div className={'bg-disco-salmon-300 order-[14] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 300'}</p>
						<p>{'#FA3AA7'}</p>
						<p>{'250.58.167'}</p>
						<p>{'5.83.0.0'}</p>
						<p>{'Pantone 806c'}</p>
					</div>
					<div className={'bg-tokyo-party-300 order-[24] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 300'}</p>
						<p>{'#5814FB'}</p>
						<p>{'88.20.251'}</p>
						<p>{'86.87.0.0'}</p>
					</div>
					<div className={'bg-up-only-green-300 order-[34] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 300'}</p>
						<p>{'#0DFF2F'}</p>
						<p>{'13.255.47'}</p>
						<p>{'95.0.100.0'}</p>
						<p>{'Pantone 802c'}</p>
					</div>


					<div className={'bg-metaverse-sunset-400 order-[5] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Metaverse Sunset 400'}</p>
						<p>{'#F0D308'}</p>
						<p>{'240.211.8'}</p>
						<p>{'9.12.93.0'}</p>
						<p>{'Pantone 7405c'}</p>
					</div>
					<div className={'bg-disco-salmon-400 order-[15] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 400'}</p>
						<p>{'#EE478A'}</p>
						<p>{'238.71.138'}</p>
						<p>{'0.83.10.0'}</p>
						<p>{'Pantone 1915c'}</p>
					</div>
					<div className={'bg-tokyo-party-400 order-[25] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 400'}</p>
						<p>{'#6B26C2'}</p>
						<p>{'107.38.194'}</p>
						<p>{'80.84.0.0'}</p>
						<p>{'Pantone 267c'}</p>
					</div>
					<div className={'bg-up-only-green-400 order-[35] h-[160px] px-5 py-4 text-black md:order-none'}>
						<p>{'Up Only Green 400'}</p>
						<p>{'#38E331'}</p>
						<p>{'56.227.49'}</p>
						<p>{'88.0.100.0'}</p>
					</div>


					<div className={'bg-metaverse-sunset-500 order-[6] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 500'}</p>
						<p>{'#F8A908'}</p>
						<p>{'248.169.8'}</p>
						<p>{'0.39.94.0'}</p>
						<p>{'Pantone 137c'}</p>
					</div>
					<div className={'bg-disco-salmon-500 order-[16] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 500'}</p>
						<p>{'#DF536A'}</p>
						<p>{'233.83.106'}</p>
						<p>{'6.79.43.0'}</p>
						<p>{'Pantone 198c'}</p>
					</div>
					<div className={'bg-tokyo-party-500 order-[26] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 500'}</p>
						<p>{'#7D3787'}</p>
						<p>{'125.55.135'}</p>
						<p>{'62.90.5.1'}</p>
						<p>{'Pantone 7662c'}</p>
					</div>
					<div className={'bg-up-only-green-500 order-[36] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 500'}</p>
						<p>{'#63C532'}</p>
						<p>{'99.197.50'}</p>
						<p>{'77.0.100.0'}</p>
					</div>


					<div className={'bg-metaverse-sunset-600 order-[7] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 600'}</p>
						<p>{'#F27F07'}</p>
						<p>{'242.127.7'}</p>
						<p>{'0.16.100.0'}</p>
						<p>{'Pantone 151c'}</p>
					</div>
					<div className={'bg-disco-salmon-600 order-[17] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 600'}</p>
						<p>{'#CC3767'}</p>
						<p>{'204.55.103'}</p>
						<p>{'14.89.35.4'}</p>
						<p>{'Pantone 7635c'}</p>
					</div>
					<div className={'bg-tokyo-party-600 order-[27] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 600'}</p>
						<p>{'#663690'}</p>
						<p>{'102.54.144'}</p>
						<p>{'75.89.0.0'}</p>
						<p>{'Pantone 526c'}</p>
					</div>
					<div className={'bg-up-only-green-600 order-[37] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 600'}</p>
						<p>{'#34A14F'}</p>
						<p>{'52.161.79'}</p>
						<p>{'94.0.93.0'}</p>
					</div>


					<div className={'bg-metaverse-sunset-700 order-[8] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 700'}</p>
						<p>{'#EA5204'}</p>
						<p>{'234.82.4'}</p>
						<p>{'0.78.100.0'}</p>
						<p>{'Pantone 166c'}</p>
					</div>
					<div className={'bg-disco-salmon-700 order-[18] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 700'}</p>
						<p>{'#B71962'}</p>
						<p>{'183.25.98'}</p>
						<p>{'22.98.28.9'}</p>
						<p>{'Pantone 215c'}</p>
					</div>
					<div className={'bg-tokyo-party-700 order-[28] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 700'}</p>
						<p>{'#4F3398'}</p>
						<p>{'79.51.152'}</p>
						<p>{'85.88.0.0'}</p>
						<p>{'Pantone 7679c'}</p>
					</div>
					<div className={'bg-up-only-green-700 order-[38] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 700'}</p>
						<p>{'#00796D'}</p>
						<p>{'0.121.109'}</p>
						<p>{'100.22.62.11'}</p>
						<p>{'Pantone 322c'}</p>
					</div>


					<div className={'bg-metaverse-sunset-800 order-[9] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 800'}</p>
						<p>{'#C73203'}</p>
						<p>{'199.50.3'}</p>
						<p>{'15.90.100.5'}</p>
						<p>{'Pantone 485c'}</p>
					</div>
					<div className={'bg-disco-salmon-800 order-[19] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 800'}</p>
						<p>{'#99104F'}</p>
						<p>{'153.16.79'}</p>
						<p>{'28.100.25.25'}</p>
						<p>{'Pantone 220c'}</p>
					</div>
					<div className={'bg-tokyo-party-800 order-[29] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 800'}</p>
						<p>{'#371F75'}</p>
						<p>{'55.31.117'}</p>
						<p>{'97.100.17.4'}</p>
						<p>{'Pantone 2685c'}</p>
					</div>
					<div className={'bg-up-only-green-800 order-[39] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 800'}</p>
						<p>{'#016057'}</p>
						<p>{'1.96.87'}</p>
						<p>{'100.31.64.30'}</p>
						<p>{'Pantone 329c'}</p>
					</div>


					<div className={'bg-metaverse-sunset-900 order-[10] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Metaverse Sunset 900'}</p>
						<p>{'#8F0000'}</p>
						<p>{'143.0.0'}</p>
						<p>{'22.100.100.31'}</p>
						<p>{'Pantone 187c'}</p>
					</div>
					<div className={'bg-disco-salmon-900 order-[20] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Disco Salmon 900'}</p>
						<p>{'#6A0031'}</p>
						<p>{'106.0.49'}</p>
						<p>{'34.100.42.53'}</p>
						<p>{'Pantone 7421c'}</p>
					</div>
					<div className={'bg-tokyo-party-900 order-[30] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Tokyo Party 900'}</p>
						<p>{'#120040'}</p>
						<p>{'18.0.64'}</p>
						<p>{'100.99.39.55'}</p>
						<p>{'Pantone 275c'}</p>
					</div>
					<div className={'bg-up-only-green-900 order-[40] h-[160px] px-5 py-4 text-white md:order-none'}>
						<p>{'Up Only Green 900'}</p>
						<p>{'#003934'}</p>
						<p>{'0.57.52'}</p>
						<p>{'100.44.68.64'}</p>
						<p>{'Pantone 3308c'}</p>
					</div>

				</div>
			</ContentCard>

		</section>
	);
}

export default Colors;
