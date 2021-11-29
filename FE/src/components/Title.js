import React from 'react'

export default function Title({name}) {
    return (
        <div className="row">
            <div className="text-center text-title">
                <h1>{name}</h1>
            </div>
        </div>
    )
}
