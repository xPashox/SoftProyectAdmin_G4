import React from 'react';
import AgregarGrupo from './boton-grupos/AgregarGrupo';
import GroupCell from './GroupCell';
import { useSelector } from 'react-redux';

// Semantic Table | Estilos
import {Table} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default function CurseGroup(props) {
    const {curso} = props;
    const GroupList = useSelector(store => store.grupos.groups)

    return(
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Jefe de Proyecto</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>N° Integrantes</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Editar</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Eliminar</Table.HeaderCell>
                        <Table.HeaderCell textAlign = 'center'>Gestion Integrantes</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        GroupList.map((group) => <GroupCell key = {group.id} group = {group}/>)
                    }
                </Table.Body>
                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan = '6' textAlign = 'right'>
                            <AgregarGrupo esEditar = {false}/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
