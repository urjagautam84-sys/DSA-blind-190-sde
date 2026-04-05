// right /left view of a binary tree

class solution {
    rightview(node, level, res){
        if(node!=null){
            return [];
        }
        if(level === Result.length){
            res.push(node.val);
        }
        this.rightview(level+1, node.left , res);
        this.rightview(level+1,node.right,res);
        }

        leftview(node, level, res){
            if(node!=null){
            return [];
        }
        if(level === Result.length){
            res.push(node.val);
        }
        this.leftview(level+1, node.left , res);
        this.leftview(level+1,node.right,res);
        }
        leftDFS(root){
            const res =[];
            this.leftview(0, level,res);
            return res;
        }
        RightDFS(root){
            const res=[];
            this.rightview(0, level, res);
        }
        }
