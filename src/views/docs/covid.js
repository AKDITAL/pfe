import React from 'react'
import {Table} from 'components/ui'

const {Tr, Th, Td, THead, TBody} = Table

const Simple = () => {
    return (
        <div>
            <Table>
                <THead>
                    <Tr>
                        <Th>Symptomes</Th>
                        <Th>Fievre>38</Th>
                        <Th>Toux séche</Th>
                        <Th>Courbatures</Th>
                        <Th>Difficultés à respirer</Th>
                        <Th>Perte de l'odorat</Th>
                        <Th>Perte de dout</Th>
                        <Th>Diarrhée</Th>
                        <Th>Entourage atteint de Covid</Th>

                    </Tr>
                </THead>
                <TBody>
                    <Tr>
                        <Td>Oui</Td>
                        <Td>Oui</Td>
                        <Td>Oui</Td>
                        <Td>Oui</Td>
                        <Td>Oui</Td>
                        <Td>Oui</Td>
                        <Td>Oui</Td>
                        <Td>Oui</Td>
                        <Td>Oui</Td>
                    </Tr>


                </TBody>
            </Table>
        </div>
    )
}

export default Simple

