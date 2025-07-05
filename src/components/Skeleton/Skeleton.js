import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const SkeletonLoader = ({ width, height, borderRadius, count=1, baseColor,highlightColor }) => {

    return <SkeletonTheme baseColor={baseColor ?? "#dfe6f3"} highlightColor={highlightColor ?? "#f5f5f5"}>
        <p><Skeleton
        count={count}
            style={{
                width: width ?? "100%",
                height: height ?? "100%",
                borderRadius: borderRadius ?? "0%",
            }}
        /></p>
    </SkeletonTheme>
}

export default SkeletonLoader