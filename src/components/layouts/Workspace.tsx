import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { Button, DetailGroup, Select, Settings, WhatsappButton, WorkBoard } from './styles/Workspace.styles';
import _Text from '../../shared/core/ui/Text';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Workspace = ({ curTab }: any) => {
    const [value, setValue] = useState('');

    var toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['clean']                                         // remove formatting button
    ];

    return (
        <>
            {curTab == 0 && <WorkBoard>
                <input style={{ width: '100%', height: 30, borderRadius: 5, fontSize: 16, paddingLeft: 20 }} placeholder='Ricerca giuridica' />
                <div style={{ display: 'flex', gap: 20, marginTop: 10 }}>
                    <Button>Ricerca per estremi</Button>
                    <Button>Ricerca per argomento</Button>
                    <Button>Altre ricerche</Button>
                </div>
                <DetailGroup>
                    <table>
                        <tr>
                            <td>Inserisci la chiave</td>
                            <td>Valida la chiave</td>
                            <td>Benvenuto</td>
                            <td>Licenza valida fino</td>
                        </tr>
                    </table>
                </DetailGroup>
                <WhatsappButton>
                    <BsWhatsapp color='white' size={20} />
                    <_Text text='Come possiamo aiutarti?' />
                </WhatsappButton>
            </WorkBoard>}
            {curTab == 1 && <WorkBoard>
                <input style={{ width: '100%', height: 30, borderRadius: 5, fontSize: 16, paddingLeft: 20, marginBottom: 20 }} placeholder='Ricerca giuridica' />
                <ReactQuill
                    style={{ backgroundColor: 'white', maxHeight: 400, overflowY: 'auto' }}
                    theme="snow"
                    value={value} 
                    onChange={setValue} 
                    modules={{ toolbar: toolbarOptions }} 
                />
                <Settings>
                    <div>
                        <_Text text='Seleziona lingua' color='black' />
                        <Select>
                            <option>Italiano</option>
                        </Select>
                    </div>
                    <div>
                        <_Text text='Tono' color='black' />
                        <Select>
                            <option>Formale</option>
                        </Select>
                    </div>
                    <div>
                        <_Text text='Stile di scrittura' color='black' />
                        <Select>
                            <option>Argomentativo</option>
                        </Select>
                    </div>
                    <div>
                        <_Text text='Attivita' color='black' />
                        <Select>
                            <option>Selezionare Una Attivita</option>
                        </Select>
                    </div>
                    <div>
                        <_Text text='Scegline una Azione' color='black' />
                        <Select>
                            <option>Seleziona un'azione</option>
                        </Select>
                    </div>
                </Settings>
                <WhatsappButton>
                    <BsWhatsapp color='white' size={20} />
                    <_Text text='Come possiamo aiutarti?' />
                </WhatsappButton>
            </WorkBoard>}
        </>
    )
}

export default Workspace;