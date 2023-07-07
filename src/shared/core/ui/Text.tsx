import React from 'react'
import { transform } from 'typescript'

interface IText {
    text: string
    size: number
    color: string
    transform: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "full-size-kana"
    weight: string
}

const _Text = ({
    text,
    size,
    color,
    transform,
    weight
}: IText) => {
    return (
        <p style={{ fontSize: size, color: color, textTransform: transform, fontWeight: weight }}>{text}</p>
    )
}

_Text.defaultProps = {
    size: 14,
    color: "white",
    transform: "none",
    weight: 'normal'
}

export default _Text;