# Recruitment Task
Editor’s prototype for a redactor of a cryptocurrencie’s blog.

I solved this task by writing in both js and react.
I mainly focused on the logic part.I prepared the UL part simply.
But it could be done with more interesting ULs.Since there is a lot of data in Apide, there are problems with loading.
The desired {{Name/BTC}} -> bitcoin in the task was to replace these processes.
If we look at the api structure, here the data after Name/ refers to the symbol of the api and we filter according to the symbol.
We are working on the newly released api.In reality, this is not the right approach, and doing this in a real project is not considered a professional approach.
Because it takes a lot of time to filter such data, it is more appropriate to do it with api queries.
I could download dalatari and work on it, but I want you to see how I want the api.
[The api i am using](https://api.coinpaprika.com/v1/coins).


I used TypeScript, useState, useMemo and javascript methods in React

-------------------------
