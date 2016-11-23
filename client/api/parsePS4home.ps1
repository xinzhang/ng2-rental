Set-Location 'C:\Projects2012\Mea2nStarter\client\api'

[xml]$x = Get-Content 'ps4home.xml'

$tempArray=@()
[System.Collections.ArrayList]$cols = $tempArray

[System.Collections.ArrayList]$results = @()


$x.table.thead.tr.th | foreach {
    $head = $_.'#text'
    $head
    $cols.Add($head)
}



$x.table.tbody.tr | foreach {
    $data = $_.td

    $obj = New-Object System.Object

    for ($i=0; $i -lt 10; $i++) {
        $val = $data[$i].'#text'
        $col = $cols[$i]

        if ($col -eq 'Box Art')
        {
            $val = $data[$i].img.src
        }

        $obj | Add-Member  –MemberType NoteProperty -Name $col -Value $val
    }
    
    $jsonstr = ConvertTo-Json $obj
    $jsonstr + ','
}



