class Solution {
    isBalanced(root) {
        //your code goes here
        this.dfshieght(root)!=-1;
        
    }dfshieght(root){
        if(root===null){
            return 0;
        }
        let lefthieght= this.dfshieght(root.left);
        if(lefthieght===-1){
            return -1;
        }

        
        let righthieght= this.dfshieght(root.right);
        if(righthieght===-1){
            return -1;
        }
        if(Math.abs(lefthieght-righthieght)>1){
            return -1;
        }
        return Math.max(lefthieght+righthieght)+1;

    }
} 