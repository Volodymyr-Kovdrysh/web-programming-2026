import {useParams} from "react-router";

const ParamsDemoPage = () => {
    const params = useParams();
    // console.log('Demo useParams :',params);
    return (
        <div>
            <h1>Param #1: {params.id}</h1>
            <h2>Param #2: {params.name}</h2>
            <p>
                {JSON.stringify(params, null, 2)}
            </p>
        </div>
    );
};

export default ParamsDemoPage;