import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgType } from '../../../data/SvgFiles';

type LocalSvgProps={
    pathName:SvgType,
    height:number,
    width:number,
    color?: string[] ,
    stroke:string
}

const SvgIcon = ({
    pathName,
    height,
    width,
    color=['red'],
    stroke,
}: LocalSvgProps) => (
    <Svg
        width={width}
        height={height}
        viewBox={pathName.viewBox}
        fill="none">
            {pathName.d.map((item,index)=><Path
            fillRule="evenodd"
            clipRule="evenodd"
            d={item}
            fill={color[index]}
            key={index}
            stroke={stroke}
        />)}
        
    </Svg>

);

 

export default SvgIcon;