import DropdownUnstyled, { DropdownTrigger as DT, DropdownContent as DC } from 'react-simple-dropdown';
import styled from 'styled-components';
import { media } from 'features/common/styles';
import IconArrowDown from 'features/common/icons/arrow_down.svg';
import IconArrowUp from 'features/common/icons/arrow_up.svg';


export default styled(DropdownUnstyled)`
  position: relative;

  & .dropdown__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .dropdown__trigger:after {
    content: '';
    display: inline-block;
    height: 1em;
    width: 10px;
    margin-left: 8px;
    vertical-align: middle;
    background: url(${IconArrowDown}) no-repeat right center;
  }

  & .dropdown__content {
    display: none;
    position: absolute;
    left: 0px;
    z-index: 1;

    margin: 0;
    margin-left:-20px;
    background: #fff;
    border-radius: 0 0 8px 8px;
    box-shadow: rgba(0,0,0,.2) 0 10px 30px -1px;
    user-select: none;
  }

  ${media.md`
    & .dropdown__content {
      left: auto;
    }
  `}

  &.dropdown--active .dropdown__trigger:after {
    background-image: url(${IconArrowUp});
  }
  &.dropdown--active .dropdown__content {
    display: block;
  }
`;

export const DropdownTrigger = DT;
export const DropdownContent = DC;
