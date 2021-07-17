import React from 'react'

import SidebarAdmin from './SidebarAdmin'
import TablesAdmin from './TablesAdmin'
import Container from '@material-ui/core/Container';
import { Grid, } from '@material-ui/core';
import TransitionsModal from './ModalForm';


function AdminPage() {
    return (
        <div>
            <SidebarAdmin />
            <Container maxWidth="sm">
            
                    <TablesAdmin />
                <TransitionsModal />
                
                
            </Container>
            
        </div>
       
            
        
    )
}

export default AdminPage
