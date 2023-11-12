import { ChangeEvent, MutableRefObject, useEffect } from 'react';

type CoinProps = {
	coin: MutableRefObject<string | null>;
	emotion: MutableRefObject<string | null>;
};

function Coin(props: CoinProps) {
	const { coin, emotion } = props;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		coin.current = event.target.value;
	};

	useEffect(
		() => () => {
			coin.current = null;
			emotion.current = null;
		},
		[],
	);

	return (
		<>
			<h3>오늘의 기분은 ?</h3>
			<div className="wrapper" style={{ display: 'flex', gap: '10px' }}>
				<div>
					<input
						className="form-check-input"
						type="radio"
						name="flexRadioDefault"
						id="unhappy"
						onClick={() => (emotion.current = 'unhappy')}
					/>
					&nbsp; &nbsp;
					<label className="form-check-label" htmlFor="unhappy">
						불행
					</label>
				</div>
				<div>
					<input
						className="form-check-input"
						type="radio"
						name="flexRadioDefault"
						id="happy"
						onClick={() => (emotion.current = 'happy')}
					/>
					&nbsp; &nbsp;
					<label className="form-check-label" htmlFor="happy">
						행복
					</label>
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<input
					className="form-check-input"
					type="number"
					name="flexRadioDefault"
					id="coin"
					placeholder="행운 코인을 입력해주세요."
					onChange={onChange}
					style={{
						height: '30px',
						width: '200px',
						padding: '5px',
					}}
				/>
			</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					marginTop: '10px',
				}}
			>
				<p style={{ fontSize: '10px' }}>오늘 작성한 일기는 더 이상 수정되지 않습니다.</p>
				<p style={{ fontSize: '10px' }}>1000 이상의 코인은 1000으로 간주됩니다.</p>
			</div>
		</>
	);
}

export default Coin;
