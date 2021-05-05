import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CLabel,
  CRow,
  CSelect,
} from "@coreui/react";

const AddUser = () => {
  const [lname, setLName] = useState("");
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [cpassword, setCPassword] = useState("");
  return (
    <CContainer>
      <CRow className="justify-content-left">
        <CCol md="10" lg="8" xl="6">
          <CCard className="mx-4">
            <CCardBody className="p-4">
              <CForm>
                <h1>New User</h1>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="fname">Firstname</CLabel>
                      <CInput
                        value={fname}
                        onChange={(e) => setFName(e.target.value)}
                        id="fname"
                        placeholder="Enter Firstname"
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="lname">Lastname</CLabel>
                      <CInput
                        value={lname}
                        onChange={(e) => setLName(e.target.value)}
                        id="lname"
                        placeholder="Enter Lastname"
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>

                <CInputGroup className="mb-3">
                  <CInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </CInputGroup>
               
                <CInputGroup className="mb-3">
                  <CInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                  />
                </CInputGroup>
               
                <CInputGroup>
                  <CInput
                    value={cpassword}
                    onChange={(e) => setCPassword(e.target.value)}
                    type="password"
                    placeholder="Repeat password"
                    autoComplete="new-password"
                  />
                </CInputGroup>
                
                <CFormGroup row className="mb-4 mt-3">
                  <CCol md="12">
                    <CLabel htmlFor="select">Role</CLabel>
                  </CCol>
                  <CCol xs="12" md="12">
                    <CSelect value={role} custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Admin</option>
                      <option value="2">User</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                
                <CButton color="success" onClick={() => {}} block>
                  Add
                </CButton>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default AddUser;
