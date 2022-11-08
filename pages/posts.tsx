import * as React from 'react'
import axios from 'axios'

function Posts(){
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchDatas = async () => {
        try {
            // 요청 시작시 error, data 초기화
            setError(null);
            setData(null);
            // loading 상태를 true로 바꾼다.
            setLoading(true);
            const response = await axios.get(
                'https://dev-nft.storicha.in/api/cashseries?series_idx=5737'
            );
            setData(response.data); // 데이터는 response.data 안에 들어가있음
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };
    React.useEffect(()=> {
        fetchDatas();
    },[]);
    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러가 발생했습니다</div>
    // 아직 data가 받아와지지 않을 때는 아무것도 표시되지 않도록 합니다.

    if (!data) return null;
    // 드디어 data가 성공적으로 받아와 진 상태

    return (
        <>
            {loading ? (
                <h1>로딩 중...</h1>
            ) : (
                <h1 onClick={()=>console.log(data)}>데이터 로딩 완료</h1>
            )}
        </>
    )
}

export default Posts;