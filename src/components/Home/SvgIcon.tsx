import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgType } from '../../../data/SvgFiles';
import { StyleProp, TextStyle } from 'react-native';

type LocalSvgProps={
    pathName:SvgType,
    height:number,
    width:number,
    color?: string[] ,
    stroke:string,
    strokeWidth:number,
    style?: StyleProp<TextStyle>
}

const SvgIcon = ({
    pathName,
    height,
    width,
    color=['red'],
    stroke,
    strokeWidth,
    style,
}: LocalSvgProps) => (
    <Svg
        width={width}
        height={height}
        viewBox={pathName.viewBox}
        style={style}
        fill="none">
            {pathName.d.map((item,index)=><Path
            fillRule="evenodd"
            clipRule="evenodd"
            d={item}
            fill={color[index]}
            key={index}
            stroke={stroke}
            strokeWidth={strokeWidth}
        />)}
        
    </Svg>

);

 

export default SvgIcon;