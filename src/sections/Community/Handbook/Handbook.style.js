import styled from "styled-components";
export const HandbookWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .content > a:first-of-type > h2:first-of-type {
      padding-top: 1rem;
    }

    .highlight{
      font-weight: 600;
    }
    .content{
      width:100%;
      padding-bottom: 2rem;
      ul > li {
        color: ${(props) => props.theme.text};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      ol > li {
        color: ${(props) => props.theme.menuColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      ul > li > span {
        color: ${(props) => props.theme.text};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      ol > li > span {
        color: ${(props) => props.theme.text};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
    }

    .page-section{
      display: flex;
      flex-direction: row;    
      align-items: flex-start;
      @media (min-width: 751px){
        margin-top: -54rem;
        position: relative;
        margin-left: 20rem;
        padding: 2rem 3rem;
      }
      @media (max-width: 750px) {
        margin-top: -4rem;
        margin-left: 2rem;
      }
    }
      
    .page-section h2,
    .page-section h2.heading-top {
      padding-top: 1rem;
      margin-top: 0;
    }
    
    .sidebar {
      margin: 0;
      padding: 0;
      width: 250px;
      background-color:${(props) => props.theme.secondaryLightColor};
      height: auto;
      min-height: 100%;
      flex-shrink: 0;
      overflow: auto;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .sidebar a {
      display: block;
      color: black;
      padding: 16px;
      text-decoration: none;
    }

    .sidebar a.active {
      background-color: ${(props) => props.theme.primaryLightColorTwo};
      color: white;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .sidebar a:hover:not(.active) {
      background-color:${(props) => props.theme.secondaryLightColor};
      color: white;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .page-header-section {
      height: 10rem;
      text-align: center;
      background: rgb(71,126,150);
      background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);
      h1 {
          line-height: 10rem;
          color: white;
      }
    }

    .community-home-subtitle {
      text-align: center;
      padding-top: 3rem;
      padding-bottom: 1.5rem;
    }

    #sign-off{
      padding-bottom: 4rem;
    }

    table {
      border-collapse: collapse;
      width: 98%;
      margin: 1rem 0 2rem 0;
      .github-icon{
        height: 1.7rem;
        width:auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
        filter: invert(${(props) => props.theme.meshInterfaceLogoFilter});
      }
      .site-icon{
        height: 1.6rem;
        width:auto;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .inline {
        display: inline;
        vertical-align: bottom;
      }
      .smp-action{
        filter: invert(${(props) => props.theme.meshInterfaceLogoFilter});
      }
    }

    .table-container {
      width: 100%;
      overflow-x: auto;
    }

    td, th {
      border: 0.05rem solid ${(props) => props.theme.primaryLightColor};
      text-align: left;
      padding: 0.5rem;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .archived-project {
      opacity: 0.3;
      background-color: #808080;
      pointer-events: auto;
    }

    .linkscol{
      text-align: center;
      width:8%;
    }

    tbody:nth-child(even) {
      background-color: ${(props) => props.theme.secondaryLightColorTwo};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .codes{
      width:75%;
      margin-top:-2rem;
    }

    .community-home-container{
      padding: 1rem 0;
      padding-bottom: 4rem;
      display: flex;
      flex-wrap : wrap;
      align-items : center;
      justify-content: center;
    }

    p{
      margin-top: 10px;
    }

    input[type=checkbox] + label {
      display: block;
      margin: 0.2em;
      cursor: pointer;
      padding: 0.2em;
    }
    input[type=checkbox] {
      display: none;
    }

    /* Exception: keep checkbox visible inside .dark-theme-toggle */
    .dark-theme-toggle input[type="checkbox"] {
      display: inline-block;
    }
      
    input[type=checkbox] + label:before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');;
      border: 0.1em solid #000;
      border-radius: 0.2em;
      display: inline-block;
      width: 1.3em;
      height: 1.3em;
      padding-left: 0.2em;
      padding-bottom: 0.3em;
      margin-right: 0.5em;

      margin-bottom: 0.15em;
      vertical-align: bottom;
      color: transparent;
      background-color: white;
    }

    input[type=checkbox] + label:active:before {
      transform: scale(0);
    }
    rect {
      fill:  ${props => props.theme.grey313131ToGreenC9FCF6};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);  
    }
    path {
      stroke: ${props => props.theme.green00D3A9ToGreen00B39F};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    input[type=checkbox]:checked + label:before {
      content: url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>');;

      background-color: ${(props) => props.theme.keppelColor};
      border-color: ${(props) => props.theme.primaryLightColorTwo};
      color: #fff;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    input[type=checkbox]:disabled + label:before {
      transform: scale(1);
      border-color: #aaa;
    }

    input[type=checkbox]:checked:disabled + label:before {
      transform: scale(1);
      background-color: ${(props) => props.theme.secondaryLightColor};
      border-color: ${(props) => props.theme.secondaryLightColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .project-org-list{
      a{
        margin-right .3rem;
      }
      img{
        height: auto;
        width: 1.6rem;
        vertical-align: middle;
      }
    }

    .project-description-icon{
      width: 3%;
      transform : translate(0,25%);
      margin: 0 0.3%;
    }

    .project-title-icon{
      margin-left:"10%";
      width: 4%;
      align: left;
      transform : translate(0,28%);
    }

    .channels-list {
      padding-left: 40px;
    }

    .channels-img {
      height: 30px;
    }

    .channels-para {
      display: flex;
      align-items: center;
    }

    .newcomers-journey{
      text-align: center;
      display: flex;
      align-items: center;
      margin: 2.5rem 5rem 3rem 0rem;

      h2{
        margin-bottom: 2rem;
      }
    }

    .heading{
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .heading-start{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
      margin-right: 2rem;
      margin-top: -2rem;
      h5{
        font-size: 1.125rem;
        font-weight: 400;
        margin-right: 1rem;
      }
      img{
        height: 3rem;
        width: 4rem;
        transition: .5s;
      }
      img:hover{
        padding-left: 1rem;
        transition: .5s;
      }
    }

    .intra-page{
      position: sticky;
      top: 10rem;
      right:0rem;
      margin-right: 1rem;
      padding-bottom: 5rem;
      align-items:left;
      justify-content:space-around;
      display: flex;
      flex-direction: row;
      overflow:hidden;
      .active{
        font-weight:5000;
        color: ${(props) => props.theme.secondaryColor};
      }
      ul{
        list-style: none;
        top: 3rem;
      }
      li{
        padding-bottom:0.5rem;
        padding-top:0.5rem;
      }
    }

    .learn{
      width: 10rem;
    }

    .writing_program{
      width: 90%;
    }

    .list{
      padding: 1.875rem 0px;
      table, tr, td{
        border:none;
      }
      .text{
        p{
          color: ${props => props.theme.tertiaryColor};
          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      }
      .listed{
          text-align: left;
          .table{
              .icon{
                  height: 2.5rem;
                  width: 2.5rem;
                  vertical-align: top;
              }
              .skill{
                  color: ${props => props.theme.tertiaryColor};
                  font-size: 16px;
                  padding: 0 0 1.25rem 1.8rem;
                  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
                  h4{
                      font-weight: 600;
                  }
              }
          }
      }
    }
    .content_list{
      position: relative;
      width: 100%;
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
    }
    .content_type { 
      display: flex;
      flex-direction: column;
      background: ${props => props.theme.grey212121ToWhite};
      box-shadow: 0px 0px ${props => props.theme.projectShadowsize} ${props => props.theme.green00D3A9ToGreyE6E6E6};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      &:hover{
        box-shadow: 0px 0px 5px ${props => props.theme.primaryColor};
      }
      padding: 12% 6% 12% 6%;
      height: 220px;
      border-radius: 4%;
      margin-bottom: 30px;
      text-align: center;
      h5{
        margin-bottom: auto; 
        margin-top: 0.5rem;
        font-weight: 700;
        color: ${props => props.theme.secondaryColor}
      }
      p{
        font-weight: 300;
        color: ${props => props.theme.text};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      img{
          height: 60px ; 
          width: auto ;
      }
    }
    .process {
      margin: 10px auto;
      border-left: solid 2px ${(props) => props.theme.tertiaryColor};
      padding: 0px 20px 0px 20px;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    } 
    .process .item {
      padding: 10px;
      font-size: 16px;
      line-height: 1.7;
      position: relative;
    }
    .item::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      display: block;
      border: 3px solid ${(props) => props.theme.tertiaryColor};
      border-radius: 50%;
      background-color: ${(props) => props.theme.secondaryColor};
      top: 25px;
      left: -32px;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    /* repository overview  */
    div.accessRequired {
      font-size: small;
      line-height: .9rem;
      font-style: italic;
    }
    details.invite-only {
      margin: 1rem;
      padding: 1rem;
      background-color: ${(props) => props.theme.grey313131ToGreenC9FCF6};
      span {
        font-weight: bold;
        display: inline;
      }
    }
  `;