1. Count Characters

ans 
const countCharacters = (S) => 
{let B=[0,0]
  for(let i= 0;i<S.length;i++)
  {
    if(S[i]=='A')
    B[0]++
    else if(S[i]=='D')
    B[1]++
  }
    return B
};
 
2.Count the Heads
ans 
var Count_Occ = (s) => 
{
    let count=1;
    let str='';
    let op="";
    for(let i=0;i<s.length;i++){
      for(j=i+1;j<s.length;j++){
        if(s[i]==s[j]){
          count++;
        }
      }
      if(count>1){
        str=s[i];
        op=op+" "+s[i]+count;
        s=s.replace(str,' ');
        s=s.split(str).join('');
      }
      count=1;
    }
    return op.split(' ').sort().join('');

};
 
3.Count the Vowels
ans 
var Count_Vowels= (S) => 
{    let count=0;
      for(let i=0;i<S.length;i++)
      {
        if(S[i]=='a'||S[i]=='A'||S[i]=='e'||S[i]=='E'||S[i]=='i'||S[i]=='I'||S[i]=='o'||S[i]=='O'||S[i]=='u'||S[i]=='U')
           {count++}
      }
      return count
};
 
4. Concatenate the Strings
ans 
var Concatenate_Strings = (S1, S2) => 
{
      return S1.concat(S2)
};
 
5.Find Length
ans 
const findLength = (S) => 
{
    return S.length
};
 
6.Find the Winner
ans  
var Game_Winner = (S) => 
{ let countA=0,countB=0;
  for(let i=0;i<S.length;i++)
  {
    if(S[i]=='A')
    countA++
    else if(S[i]=='D')
    countB++
  }
  if(countA>countB)
  return "Aditya"
  else if(countA<countB)
  return "Danish"
  else if(countA==countB)
  return "Draw"
}
 
7.Join Strings
ans 
const joinStrings = (S, P) => 
{
    return S.concat(P)
};
 
8.Plaindrome Check
ans  
var Palin_Check = (str) =>
{let p=0;
	 for(let i=0,j=str.length-1;i<j;i++,j--)
	 {
	   if(str[i]!=str[j])
	   {
	     p=1
	     break;
	   }
	 }
	 if(p==1)
	 return "False"
	 else
	 return "True"
}

9.Reverse the String
ans 
var Reverse_String = (str) => 
{
     return (str.split("").reverse().join(""));

};
 
10.Match the Strings
ans 
var String_Match = (S1,S2) => 
{
      if(S1==S2)
      return "YES"
      else 
      return "NO"
      
};
 
11.String Replace
ans 
var Replace = (S, pattern , text) => 
{
   let S2=   S.replace(pattern,text)
      return S2
};
 
12.Split the String
ans 
var Split_the_string = (S) => 
{
  let S1=S.split(" ")
     return S1   
};
 
13.Count the Vowels and Consonants
ans 
var Count_Vowels= (S) => 
{
      let count=0;
      for(let i=0;i<S.length;i++)
      {
        if(S[i]=='a'||S[i]=='A'||S[i]=='e'||S[i]=='E'||S[i]=='i'||S[i]=='I'||S[i]=='o'||S[i]=='O'||S[i]=='u'||S[i]=='U')
           {count++}
      }
      return count
};
var Count_Consonants= (S) => 
{
      let count=0;
      for(let i=0;i<S.length;i++)
      {
        if(S[i]!='a'&&S[i]!='A'&&S[i]!='e'&&S[i]!='E'&&S[i]!='i'&&S[i]!='I'&&S[i]!='o'&&S[i]!='O'&&S[i]!='u'&&S[i]!='U')
           {count++}
      }
      return count
};
 
