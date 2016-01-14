"""
Pull submissions from CMT in excel form
Remove unneeded columns
Save as CSV
import into postgres

    importmydata.py nedbday test CSVFILE

run this script
  
    python gen_posters.py > posters.html

"""
from sqlalchemy import *

db = create_engine("postgresql://localhost/test")
conn = db.connect()

q = """
select distinct name, title, abstract from nedbday
where status = 'Awaiting Decision' or status = 'Rejected'
order by name
"""

template = """
         <tr>
          <td>
              %s<br/>
              <strong>%s</strong><br/>
              <a href="javascript: toggleVisibility ('#po%s')">Toggle Abstract</a>
              <div id="po%s" class="abstract" style="display: none;">
                <p>
                %s
                </p>
              </div>
          </td>
        </tr>

"""
cur = conn.execute(q)
for idx, row in enumerate(cur):
  print template % (row[0], row[1], idx, idx, row[2])
