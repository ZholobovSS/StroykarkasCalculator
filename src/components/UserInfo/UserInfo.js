import React from 'react'
import TextField from '@material-ui/core/TextField'


const UserInfo = ({form, CState} ) => {

        const userInfoValidate = (userInfo, type, value) => {

        const newUserInfo = userInfo;
        const validPhoneMask = 'X (XXX) XXX-XX-XX';

        let validate = 0;        
        let validPhone = '';
        let newValue = '';


        switch (type) {
            case 'userName':
                if ((value.search(/\d/g) === -1 && value.length > 2)) {
                    validate = 1;
                } 
                newValue = value;
                break;
            case 'userPhone':
                if (value.replace(/[^\d]/g, '').length === 11) {
                    validate = 1;
                    let i = 0
                    for (const ch of validPhoneMask) {
                        validPhone += ch === 'X' ? value[i++] : ch;
                    }
                    newValue = validPhone
                } else {
                    newValue = value;
                }
                
                break;
            default:
                validate = 0;
                break;
        }

        newUserInfo[type].value = newValue
        newUserInfo[type].valid = validate


        CState.changeUserInfo(newUserInfo)

    }

    return (
        <React.Fragment>
        { Object.keys(form.userInfo).map( el =>  
            <TextField
            key = {
                form.userInfo[el].name
            }
            required
            defaultValue={form.userInfo[el].value || ''}
            type="string"
            error={!form.userInfo[el].valid}
            label={form.userInfo[el].rusName}
            variant="outlined"
            fullWidth
            onChange={e => userInfoValidate(form.userInfo, form.userInfo[el].name, e.target.value)}
            />
          ) }
        </React.Fragment>
    )
}

export default UserInfo