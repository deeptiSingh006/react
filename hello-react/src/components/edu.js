function Edu(props){
    return (<div>
        <table>
  <tr>
    <th>Qualification</th>
    <th>Year</th>
  </tr>
  <tr>
    <td>Bsc.</td>
    <td>2003</td>
  </tr>
  <tr>
    <td>Msc.</td>
    <td>2006</td>
  </tr>
  <tr>
    <td>Mca.</td>
    <td>2010</td>
  </tr>
</table>
<a href={props.collegelogo}>College Logo</a>

</div>
    );
}
export default Edu;