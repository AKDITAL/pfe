import React from 'react';
import { Table } from 'components/ui';

const { Tr, Th, Td, THead, TBody } = Table;

const Simple = () => {
    return (
        <div className="border">
            <Table>
                <THead>
                    <Tr>
                        <Th className="cell-border">Symptomes</Th>
                        <Th className="cell-border">Fievre &gt; 38</Th>
                        <Th className="cell-border">Toux séche</Th>
                        <Th className="cell-border">Courbatures</Th>
                        <Th className="cell-border">Difficultés à respirer</Th>
                        <Th className="cell-border">Perte de l'odorat</Th>
                        <Th className="cell-border">Perte de doute</Th>
                        <Th className="cell-border">Diarrhée</Th>
                        <Th className="cell-border">Entourage atteint de Covid</Th>
                    </Tr>
                </THead>
                <TBody>
                    <Tr>
                        <Td className="cell-border">Oui</Td>
                        <Td className="cell-border">Oui</Td>
                        <Td className="cell-border">Oui</Td>
                        <Td className="cell-border">Oui</Td>
                        <Td className="cell-border">Oui</Td>
                        <Td className="cell-border">Oui</Td>
                        <Td className="cell-border">Oui</Td>
                        <Td className="cell-border">Oui</Td>
                        <Td className="cell-border">Oui</Td>
                    </Tr>
                </TBody>
            </Table>
        </div>
    );
};

export default Simple;
