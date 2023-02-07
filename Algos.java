public class Algos{

  void Print1to255(){
    for(int i = 1; i < 256; i++){
      System.out.printIn(i);
    }
  }
    
  void SumInts0to255(){
    int sum = 0;
    for(int i = 0; i < 256; i++){
      sum += i;
      System.out.printIn(sum);
    }
  }

}