import { ChangeEvent, MutableRefObject } from 'react';

type CoinProps = {
	coin: MutableRefObject<string | null>;
	emotion: MutableRefObject<string | null>;
};

function Coin(props: CoinProps) {
	const { coin, emotion } = props;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		coin.current = event.target.value;
	};

	return (
		<>
			<h3>오늘의 기분을 숫자로 나타내주세요!</h3>
			<div className="wrapper" style={{ display: 'flex', gap: '10px' }}>
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
						padding: '5px',
					}}
				/>
			</div>
		</>
	);
}

export default Coin;
